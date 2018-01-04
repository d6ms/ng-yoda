import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.sass']
})
export class IndividualsComponent implements OnInit {

  timeFeeColumns;
  timeFeeData;

  distanceIntFeeColumns;
  distanceIntFeeData;

  distanceExtFeeColumns;
  distanceExtFeeData;

  constructor() {
  }

  ngOnInit() {
    this.timeFeeColumns = ['作業時間', '料金'];
    this.timeFeeData = new MatTableDataSource<TimeFee>([
      {time: '〜2時間', fee: '13,500'},
      {time: '2時間〜3時間', fee: '17,000'},
      {time: '3時間〜4時間', fee: '20,500'},
      {time: '4時間〜5時間', fee: '24,000'},
      {time: '5時間〜6時間', fee: '27,500'}
    ]);
    this.distanceIntFeeColumns = ['移動距離', '料金'];
    this.distanceIntFeeData = new MatTableDataSource<DistanceFee>([
      {distance: '〜5km', fee: '0'},
      {distance: '5〜10km', fee: '2,160'},
      {distance: '10〜20km', fee: '4,860'},
      {distance: '20〜30km', fee: '7,020'},
      {distance: '30〜40km', fee: '9,180'},
      {distance: '40〜50km', fee: '11,340'},
    ]);
    this.distanceExtFeeColumns = ['移動距離', '料金'];
    this.distanceExtFeeData = new MatTableDataSource<DistanceFee>([
      {distance: '山梨〜東京', fee: '35,000〜'},
      {distance: '山梨〜愛知', fee: '55,000〜'},
      {distance: '山梨〜新潟', fee: '55,000〜'},
      {distance: '山梨〜宮城', fee: '80,000〜'},
      {distance: '山梨〜大阪', fee: '80,000〜'}
    ]);
  }

}

export interface TimeFee {
  time: string;
  fee: string;
}

export interface DistanceFee {
  distance: string;
  fee: string;
}
