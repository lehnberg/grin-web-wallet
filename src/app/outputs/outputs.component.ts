import { Component, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';
import { amountAsHr} from '../shared/format';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  amountAsHr = amountAsHr;
  constructor(public walletService: WalletService) { }

  ngOnInit() {
    this.walletService.refreshOutputs(false );
  }

}
