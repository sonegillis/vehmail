import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-segments',
  templateUrl: './button-segments.component.html',
  styleUrls: ['./button-segments.component.scss']
})
export class ButtonSegmentsComponent implements OnInit {
  @Input() buttons;
  @Output() changed = new EventEmitter();

  activeSegment: string;
  constructor() {
  }

  ngOnInit() {
    if (Object.keys(this.buttons).length > 0) {
      this.activeSegment = Object.keys(this.buttons)[0];
    }
    console.log(this.activeSegment);
  }

  activateSegment(segmentID: string) {
    if (segmentID !== this.activeSegment) {
      this.changed.emit(segmentID);
    }
    this.activeSegment = segmentID;
  }
}
