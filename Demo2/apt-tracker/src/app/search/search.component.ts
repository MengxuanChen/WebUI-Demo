import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  localData;
  cols;
  apts;
  fullScreenMode;
  selectedRow: object;
  stringRow;
  editMode;
  editForm;
  editObject;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({});
  }


  ngOnInit() {
    this.localData = this.dataService.getData();
    this.apts = this.localData;
    console.log(this.apts);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'x_mitre_platforms', header: "Platform" }

    ];
  }
  openRow(e) {
    this.selectedRow = e;
    this.stringRow = JSON.stringify(this.selectedRow);
    this.fullScreenMode = true;
  }

  openEdit(e) {
    this.selectedRow = e;
    console.log(e);
    this.editObject = this.dataService.getData().filter((elem) => e['id'] === elem['id'])[0];
    console.log(this.editObject);
    this.editForm = this.formBuilder.group({
      name: [this.editObject['name'] || "", Validators.required],
      type: [this.editObject['type'] || "", Validators.required],
      x_mitre_platforms: [(this.editObject['x_mitre_platforms']|| []).join(',') || ""],
      x_mitre_permissions_required: [(this.editObject['x_mitre_permissions_required']|| []).join(',') || ""],
      kill_chain_name: [(this.editObject['kill_chain_name']|| []).join(',') || ""],
      x_mitre_defense_bypassed: [(this.editObject['x_mitre_defense_bypassed']|| []).join(',') || ""],
      x_mitre_contributors: [(this.editObject['x_mitre_contributors']||[]).join(',') || ""],
      x_mitre_data_sources: [(this.editObject['x_mitre_data_sources']|| []).join(',') || ""],
      description: [this.editObject['description'] || ""],
      x_mitre_detection: [this.editObject['x_mitre_detection'] || ""],
      external_references: [this.editObject['external_references'] || ""],
      comment: [this.editObject['comment'] || ""]

    })
    this.editMode = true;
  }
  saveRow() {
    console.log(this.editForm.get('x_mitre_platforms').value)
    let platforms = (this.editForm.get('x_mitre_platforms').value)
    let platfformsArray = platforms.split(',');

    let perms = this.editForm.get('x_mitre_permissions_required').value
    let permsArray = perms.split(',');

    let chain = this.editForm.get('kill_chain_name').value
    let chainArray = chain.split(',');

    let bypass = this.editForm.get('x_mitre_defense_bypassed').value;
    let bypassArray = bypass.split(',');

    let contribs = this.editForm.get('x_mitre_contributors').value;
    let contribsArray = contribs.split(',');

    let dataSources = this.editForm.get('x_mitre_data_sources').value;
    let datasourcesArray = dataSources.split(',');


    this.editObject['name'] = this.editForm.get('name').value;
    this.editObject['type'] = this.editForm.get('type').value;
    this.editObject['x_mitre_platforms'] = platfformsArray;
    this.editObject['x_mitre_permissions_required'] = permsArray;
    this.editObject['kill_chain_name'] = chainArray;
    this.editObject['x_mitre_defense_bypassed'] = bypassArray;
    this.editObject['x_mitre_contributors'] = contribsArray;
    this.editObject['x_mitre_data_sources'] = datasourcesArray;
    this.editObject['description'] = this.editForm.get('description').value;
    this.editObject['x_mitre_detection'] = this.editForm.get('x_mitre_detection').value;
    this.editObject['comment']=this.editForm.get('comment').value;



    console.log(this.editObject)
    this.localData = this.dataService.getData();
    this.editMode = false;
  }

}
