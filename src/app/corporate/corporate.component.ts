import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.sass']
})
export class CorporateComponent implements OnInit {

  feeColumns;
  feeData;

  exampleColumns;
  exampleData;

  workFeeColumns;
  workFeeData;

  miscFeeColumns;
  miscFeeData;

  constructor() { }

  ngOnInit() {
    this.feeColumns = ['移動距離', '料金'];
    this.feeData = new MatTableDataSource<Fee>([
      {description: '〜20km', fee: '4,860'},
      {description: '21km〜50km', fee: '1kmごとに +216円'},
      {description: '51km〜100km', fee: '1kmごとに +162円'},
      {description: '101km〜150km', fee: '1kmごとに +129円'},
      {description: '151km〜', fee: '1kmごとに +108円'}
    ]);
    this.exampleColumns = ['輸送先', '料金'];
    this.exampleData = new MatTableDataSource<Fee>([
      {description: '東京', fee: '25,000'},
      {description: '愛知', fee: '38,000'},
      {description: '大阪', fee: '58,000'},
      {description: '宮城', fee: '65,000'},
      {description: '広島', fee: '91,000'}
    ]);
    this.workFeeColumns = ['作業内容', '料金'];
    this.workFeeData = new MatTableDataSource<Fee>([
      {description: '積み込み・積み下ろし(30分以上)', fee: '30分毎に +540円'},
      {description: '荷物の搬入・搬出(2時間以内)', fee: '11,900'},
      {description: '他社様引越しにおける積み込み作業(2時間以内)', fee: '13,500'},
    ]);
    this.miscFeeColumns = ['内容', '料金'];
    this.miscFeeData = new MatTableDataSource<Fee>([
      {description: '荷待ち料金(待機料金)', fee: '30分毎に 1,080円'},
      {description: '留め置き料金', fee: '30分毎に 1,080円'},
      {description: '日曜・祝日', fee: '2割増'},
      {description: '深夜(22:00〜05:00)作業', fee: '3割増'}
    ]);
  }

}

export interface Fee {
  description: string;
  fee: string;
}
