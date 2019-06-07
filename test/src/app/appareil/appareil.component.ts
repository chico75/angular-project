import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexofAppareil: number;
  @Input() id: number;

  constructor(private appareilServive: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
  onSwitchOn() {
    this.appareilServive.switchONOne(this.indexofAppareil);
  }
  onSwitchOff() {
    this.appareilServive.switchOffOne(this.indexofAppareil);
  }

}
