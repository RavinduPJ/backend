/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderBook {
  @PrimaryGeneratedColumn()
  index!: number;

  @Column()
  OrderBookUniqueKey: string;
  
  @Column()
  OrderBookVPOUniqueKey: string;

  @Column()
  CBU: string;

  @Column()
  Buyer: string;

  @Column()
  GroupTechClass: number;

  @Column()
  BuyerDivisionCode: string;

  @Column()
  BuyerDivisionName: string;

  @Column()
  StyleNo: string;

  @Column()
  CustStyleNo: number;

  @Column()
  ItemDescription: string;

  @Column()
  ProductGroup: string;

  @Column()
  StyleCategory: string;

  @Column()
  Season: number;

  @Column()
  GarmentFabrication: string;

  @Column()
  LeadFactory: string;

  @Column()
  ProdWarehouse: string;

  @Column()
  MinCOSts: number;

  @Column()
  MaxCOSts: string;

  @Column()
  CONo: string;

  @Column()
  CPONo: string;

  @Column()
  VPONo: number;

  @Column()
  DeliveryTerm: string;

  @Column()
  ShipmentMode: string;

  @Column()
  ColorCode: string;

  @Column()
  ColorName: number;

  @Column()
  ZOption: string;

  @Column()
  Destination: string;

  @Column()
  PackMethod: string;

  @Column()
  ScheduleNo: number;

  @Column()
  MFGSchedule: string;

  @Column()
  TransReason: string;

  @Column()
  ReqDelDate: string;

  @Column()
  PlanDelDate: number;

  @Column()
  MaxDepartureDate_CO: string;

  @Column()
  PCDDate: string;

  @Column()
  FOBDate: string;

  @Column()
  NDCDate: number;

  @Column()
  PED: string;

  @Column()
  MO_MOP: string;

  @Column()
  COQty: string;

  @Column()
  MOQty: number;

  @Column()
  CumCutQty: string;
  
  @Column()
  CumSewInQty: number;

  @Column()
  CumSewInRejQty: string;

  @Column()
  CumSawOutQty: string;

  @Column()
  CumSeqOutRejQty: string;

  @Column()
  CumCTNQty: number;

  @Column()
  CumCTNRejQty: string;

  @Column()
  FGTrans_FGWrite: string;

  @Column()
  RemainingQty: string;

  @Column()
  AllocatedQty: number;

  @Column()
  PickListQty: string;

  @Column()
  DeliveredQty: string;

  @Column()
  InvoicedQty: string;

  @Column()
  OrderToShipped: number;

  @Column()
  Short_ExcessShippedQty: string;

  @Column()
  FOBPrice: string;

  @Column()
  FOBAfterDiscount: string;

  @Column()
  SMV: number;

  @Column()
  PlannedSAH: string;

  @Column()
  ConstingEfficiency: string;

  @Column()
  COResponsible: string;

  @Column()
  COCreateMinDate: number;

  @Column()
  COCreateMaxDate: string;

  @Column()
  OrderPlacementDate: string;

  @Column()
  DropDeadDate: string;

  @Column()
  AOQ: number;

  @Column()
  Type: string;

  @Column()
  ProjectionRef: string;
}