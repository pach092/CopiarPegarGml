import { NgModule, Component, ViewChild, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxDataGridComponent,
         DxButtonModule } from 'devextreme-angular';
import { Service, Employee, State } from './app.service';
import ArrayStore from 'devextreme/data/array_store'

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.scss'],
  providers: [Service]
})
export class BorrarComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    dataSource: ArrayStore;
    states: State[];
    selectedItemKeys: any[] = [];
    globalIndex: number;

    constructor(service: Service) {
        this.dataSource = new ArrayStore({
            key: "ID",
            data: service.getEmployees()
        });
        this.states = service.getStates();
    }

    ngOnInit() {
      const editor = document;
      const that = this;
      
      
      function paste(event) {
        console.log(event);
        let clipboardData, pastedData;
        event.stopPropagation();
        event.preventDefault();
        clipboardData = event.clipboardData || window['clipboardData'];
        pastedData = clipboardData.getData('Text');
        let data = pastedData;
        var rows = data.split("\n");
        console.log("rows :" + rows);
        for(var y in rows) {
          var cells = rows[y].split("\t");
          if(cells !== "" || cells !== null) {
            console.log("cells :" + cells);
            console.log("customers :" + that.dataSource['_array'][y]);
            console.log(y)
            console.log(that.dataSource['_array'][that.globalIndex + parseInt(y)])
            console.log(typeof(that.globalIndex) + typeof(y))
            const body = that.dataSource['_array'][that.globalIndex + parseInt(y)]
            body.FirstName = cells;
          }
        }
      }
      editor.onpaste = paste;
    }

    selectionChanged(data: any) {
        this.selectedItemKeys = data.selectedRowKeys;
    }
    deleteRecords() {
        this.selectedItemKeys.forEach((key) => {
            this.dataSource.remove(key);
        });
        this.dataGrid.instance.refresh();
    }

    onCellClick(args) {
      this.globalIndex = args.rowIndex;
    }
}
