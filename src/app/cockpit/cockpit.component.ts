import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>;
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent });
  }

}
