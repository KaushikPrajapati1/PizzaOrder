import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-entry',
  standalone: true,
  providers : [DecimalPipe],
  imports: [FormsModule,CommonModule],
  templateUrl: './order-entry.component.html',
  styleUrl: './order-entry.component.css'
})
export class OrderEntryComponent {
  @ViewChild("lblSmallSize") lblSmallSize:any; @ViewChild("lblMediumSize") lblMediumSize:any; @ViewChild("lblLargeSize") lblLargeSize:any; @ViewChild("lbleLargeSize") lbleLargeSize:any;
  @ViewChild("ctemptomatoessmall")
  ctemptomatoessmall!: HTMLInputElement;
//  @ViewChild("totalSmall") totalSmall:any;
//  @ViewChild("totalMedium") totalMedium:any;
//  @ViewChild("totalLarge") totalLarge:any;
//  @ViewChild("totaleLarge") totaleLarge:any;
 @ViewChild("totalSmallOffer") totalSmallOffer:any; @ViewChild("totalMediumOffer") totalMediumOffer:any; @ViewChild("totalLargeOffer") totalLargeOffer:any; @ViewChild("totaleLarge") totaleLarge:any;
 isChktomatoessmall:boolean=false; isChktomatoesmedium:boolean=false; isChktomatoeslarge:boolean=false; isChktomatoeselarge:boolean=false;
 isChkonionssmall:boolean=false; isChkonionsmedium:boolean=false; isChkonionslarge:boolean=false; isChkonionselarge:boolean=false;
 isChkbellpeppersmall:boolean=false;isChkbellpeppermedium:boolean=false;isChkbellpepperlarge:boolean=false;isChkbellpepperelarge:boolean=false;
 isChkmushroomsmall:boolean=false;isChkmushroommedium:boolean=false;isChkmushroomlarge:boolean=false;isChkmushroomelarge:boolean=false;
 isChkpineapplesmall:boolean=false;isChkpineapplemedium:boolean=false;isChkpineapplelarge:boolean=false;isChkpineappleelarge:boolean=false;
 isChksausagesmall:boolean=false;isChksausagemedium:boolean=false;isChksausagelarge:boolean=false;isChksausageelarge:boolean=false;
 isChkpeperonismall:boolean=false;isChkpeperonimedium:boolean=false;isChkpeperonilarge:boolean=false;isChkpeperonielarge:boolean=false;
 isChkbarbequechickensmall:boolean=false;isChkbarbequechickenmedium:boolean=false;isChkbarbequechickenlarge:boolean=false;isChkbarbequechickenelarge:boolean=false;
 smallSize:string = "0";
 mediumSize:string = "0";
 largeSize:string = "0";
 elargeSize:string = "0";
 smallPrice: string = "5";
 mediumPrice: string = "7";
 largePrice: string = "8";
 elargePrice: string = "9";
totalSmallValue:string ="";totalMediumValue:string="";totalLargeValue:string ="";totaleLargeValue:string ="";
tmpTomatoPrice:number=1;
tmpOnionPrice:number=0.50;
tmpBellpepperPrice:number=1;
tmpMushroomsPrice:number=1.20;
tmpPineapplePrice:number=0.75;
tmpSausagePrice:number=1;
tmpPeperoniPrice:number=2;
tmpBarbequechickenPrice:number=3;
isChkOffer1:boolean=false;
isChkOffer2:boolean=false;
ischkOffer3:boolean=false;
  onChkonionselarge() {
this.CalculateeLargeSizeAmount();
}
onChkbellpepperelarge() {
  this.CalculateeLargeSizeAmount();
}
onChkmushroomelarge() {
  this.CalculateeLargeSizeAmount();
}
onChkpineappleelarge() {
  this.CalculateeLargeSizeAmount();
}
onChksausageelarge() {
  this.CalculateeLargeSizeAmount();
}
onChkpeperonielarge() {
  this.CalculateeLargeSizeAmount();
}
onChkbarbequechickenelarge() {
  this.CalculateeLargeSizeAmount();
}
onChktomatoeselarge() {
  this.CalculateeLargeSizeAmount();
}
onChkbarbequechickenlarge() {
  this.ischkOffer3=false;
this.CalculateLargeSizeAmount();
}
onChkpeperonilarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChksausagelarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChkpineapplelarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChkmushroomlarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChkbellpepperlarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChkonionslarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChktomatoeslarge() {
  this.ischkOffer3=false;
  this.CalculateLargeSizeAmount();
}
onChktomatoesmedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
onChkonionsmedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
onChkbellpeppermedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
onChkmushroommedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
this.CalculateMediumSizeAmount();
}
onChkpeperonimedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
onChkbarbequechickenmedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false; 
  this.CalculateMediumSizeAmount();
}
onChksausagemedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
onChkpineapplemedium() {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  this.CalculateMediumSizeAmount();
}
private offer1(cnt:number){
          if (cnt==2 && parseFloat(this.mediumSize)==1) 
          {
            this.isChkOffer1=true;
           this.isChkOffer2=false;
          }
}
private offer2(cnt:number){
          if (cnt==4 && parseFloat(this.mediumSize)==2) 
          {
            this.isChkOffer2=true;
            this.isChkOffer1=false;
          }
        }
MediumMinus(_t17: HTMLLabelElement) {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  if (parseFloat(_t17.innerText)< 2 || _t17.innerText=="")
   {
    this.mediumSize = (0).toString();
    this.isChkonionsmedium = false;
    this.isChktomatoesmedium = false;
    this.isChkbellpeppermedium =false;
    this.isChkmushroommedium=false;
    this.isChkpineapplemedium =false;
    this.isChksausagemedium=false;
    this.isChkpeperonimedium=false;
    this.isChkbarbequechickenmedium=false; 
  }else
  this.mediumSize = (parseFloat(_t17.innerText)-1).toString();
  this.lblMediumSize.innerText = this.mediumSize;
  this.CalculateMediumSizeAmount();
}
MediumPlus(_t17: HTMLLabelElement) {
  this.isChkOffer1=false;
  this.isChkOffer2=false;
  if (parseFloat(_t17.innerText)== 0 || _t17.innerText=="")
    this.mediumSize = (0+1).toString();
  else
  this.mediumSize = (parseFloat(_t17.innerText)+1).toString();

  this.lblMediumSize.innerText = this.mediumSize;
  this.CalculateMediumSizeAmount()
}

private CalculateSmallSizeAmount(){
  this.tmpTomatoPrice = this.isChktomatoessmall==true ? 1 : 0;
  this.tmpOnionPrice = this.isChkonionssmall==true ? 0.5 : 0;
  this.tmpBellpepperPrice = this.isChkbellpeppersmall==true ? 1 : 0;
  this.tmpMushroomsPrice = this.isChkmushroomsmall==true ? 1.20 : 0;
  this.tmpPineapplePrice = this.isChkpineapplesmall==true ? 0.75 : 0;
  this.tmpSausagePrice = this.isChksausagesmall==true ? 1 : 0;
  this.tmpPeperoniPrice = this.isChkpeperonismall==true ? 2 : 0;
  this.tmpBarbequechickenPrice = this.isChkbarbequechickensmall==true ? 3 : 0;
  this.totalSmallValue = (
    (parseFloat(this.smallPrice)+ this.tmpTomatoPrice + this.tmpOnionPrice+ this.tmpBellpepperPrice + this.tmpMushroomsPrice
    + this.tmpPineapplePrice + this.tmpSausagePrice+ this.tmpPeperoniPrice + this.tmpBarbequechickenPrice
  )*parseFloat(this.smallSize)
  ).toString();  
}

   private CalculateMediumSizeAmount(){
    this.tmpTomatoPrice = this.isChktomatoesmedium==true ? 1 : 0;
    this.tmpOnionPrice = this.isChkonionsmedium==true ? 0.5 : 0;
    this.tmpBellpepperPrice = this.isChkbellpeppermedium==true ? 1 : 0;
    this.tmpMushroomsPrice = this.isChkmushroommedium==true ? 1.20 : 0;
    this.tmpPineapplePrice = this.isChkpineapplemedium==true ? 0.75 : 0;
    this.tmpSausagePrice = this.isChksausagemedium==true ? 1 : 0;
    this.tmpPeperoniPrice = this.isChkpeperonimedium==true ? 2 : 0;
    this.tmpBarbequechickenPrice = this.isChkbarbequechickenmedium==true ? 3 : 0;
    this.totalMediumValue = (
      (parseFloat(this.mediumPrice)+ this.tmpTomatoPrice + this.tmpOnionPrice+ this.tmpBellpepperPrice + this.tmpMushroomsPrice
      + this.tmpPineapplePrice + this.tmpSausagePrice+ this.tmpPeperoniPrice + this.tmpBarbequechickenPrice
    )*parseFloat(this.mediumSize)
  ).toString();  
  let cnt:number=0;
  if(this.isChkonionsmedium == true ){
    cnt=cnt+1;
  }
  if(this.isChktomatoesmedium == true){
    cnt=cnt+1;
  }
  if(this.isChkbellpeppermedium == true){
    cnt=cnt+1;
  }
  if(this.isChkmushroommedium == true){
    cnt=cnt+1;
  }
  if(this.isChkpineapplemedium == true){
    cnt=cnt+1;
  }
  if(this.isChksausagemedium == true){
    cnt=cnt+1;
  }
  if(this.isChkpeperonimedium == true ){
    cnt=cnt+1;
  }
  if(this.isChkbarbequechickenmedium == true){
    cnt=cnt+1;
  }
  this.offer1(cnt);
  this.offer2(cnt);
    if (this.isChkOffer1==true ){
    this.totalMediumOffer = "5.00";
   }
   else if (this.isChkOffer2==true ){
    this.totalMediumOffer = "9.00";
   }
   else
   {
      this.isChkOffer1=false;
      this.isChkOffer2=false;
      this.totalMediumOffer=this.totalMediumValue;
     this.totalMediumValue="";
   }
}

   private CalculateLargeSizeAmount(){
    this.tmpTomatoPrice = this.isChktomatoeslarge==true ? 1 : 0;
    this.tmpOnionPrice = this.isChkonionslarge==true ? 0.5 : 0;
    this.tmpBellpepperPrice = this.isChkbellpepperlarge==true ? 1 : 0;
    this.tmpMushroomsPrice = this.isChkmushroomlarge==true ? 1.20 : 0;
    this.tmpPineapplePrice = this.isChkpineapplelarge==true ? 0.75 : 0;
    this.tmpSausagePrice = this.isChksausagelarge==true ? 1 : 0;
    this.tmpPeperoniPrice = this.isChkpeperonilarge==true ? 2 : 0;
    this.tmpBarbequechickenPrice = this.isChkbarbequechickenlarge==true ? 3 : 0;
    this.totalLargeValue = (
      (parseFloat(this.largePrice)+ this.tmpTomatoPrice + this.tmpOnionPrice+ this.tmpBellpepperPrice + this.tmpMushroomsPrice
      + this.tmpPineapplePrice + this.tmpSausagePrice+ this.tmpPeperoniPrice + this.tmpBarbequechickenPrice
    )*parseFloat(this.largeSize)
  ).toString();  
  let cnt:number=0;
  if(this.isChkonionslarge == true ){
    cnt=cnt+1;
  }
  if(this.isChktomatoeslarge == true){
    cnt=cnt+1;
  }
  if(this.isChkbellpepperlarge == true){
    cnt=cnt+1;
  }
  if(this.isChkmushroomlarge == true){
    cnt=cnt+1;
  }
  if(this.isChkpineapplelarge == true){
    cnt=cnt+1;
  }
  if(this.isChksausagelarge == true){
    cnt=cnt+1;
  }
  if(this.isChkpeperonilarge == true ){
    cnt=cnt+1;
  }
  if(this.isChkbarbequechickenlarge == true){
    cnt=cnt+1;
  }
  if (cnt>1 && cnt<3) 
  {
    this.isChkbarbequechickenlarge=true ;
    this.isChkpeperonilarge=true;
    this.ischkOffer3=true;
    }else if (cnt>2)
    {
    this.isChkbarbequechickenlarge=false ;
    this.isChkpeperonilarge=false;
    this.ischkOffer3=false;
    this.totalLargeOffer=this.totalLargeValue;
    this.totalLargeValue="";
    }

  if(this.ischkOffer3==true ){
   this.totalLargeOffer = parseFloat(this.totalLargeValue)/2;
  }
}
   private CalculateeLargeSizeAmount(){
    this.tmpTomatoPrice = this.isChktomatoeselarge==true ? 1 : 0;
    this.tmpOnionPrice = this.isChkonionselarge==true ? 0.5 : 0;
    this.tmpBellpepperPrice = this.isChkbellpepperelarge==true ? 1 : 0;
    this.tmpMushroomsPrice = this.isChkmushroomelarge==true ? 1.20 : 0;
    this.tmpPineapplePrice = this.isChkpineappleelarge==true ? 0.75 : 0;
    this.tmpSausagePrice = this.isChksausageelarge==true ? 1 : 0;
    this.tmpPeperoniPrice = this.isChkpeperonielarge==true ? 2 : 0;
    this.tmpBarbequechickenPrice = this.isChkbarbequechickenelarge==true ? 3 : 0;
    this.totaleLargeValue = (
      (parseFloat(this.elargePrice)+ this.tmpTomatoPrice + this.tmpOnionPrice+ this.tmpBellpepperPrice + this.tmpMushroomsPrice
      + this.tmpPineapplePrice + this.tmpSausagePrice+ this.tmpPeperoniPrice + this.tmpBarbequechickenPrice
    )*parseFloat(this.elargeSize)
  ).toString();  
   }
   SmallMinus(_t10: HTMLLabelElement) {
    if (parseFloat(_t10.innerText)<2|| _t10.innerText=="")
    {
    this.smallSize = (0).toString();
    this.lblSmallSize.innerText = this.smallSize;
    this.CalculateSmallSizeAmount();  
    this.isChkonionssmall = false;
    this.isChktomatoessmall = false;
    this.isChkbellpeppersmall =false;
    this.isChkmushroomsmall=false;
    this.isChkpineapplesmall =false;
    this.isChksausagesmall=false;
    this.isChkpeperonismall=false;
    this.isChkbarbequechickensmall=false;
  }else{
    this.smallSize = (parseFloat(_t10.innerText)-1).toString();
    this.lblSmallSize.innerText = this.smallSize;
    this.CalculateSmallSizeAmount();
 }
}

SmallPlus(_t10: HTMLLabelElement) {
  let tempPrice:number=0;
  if (parseFloat(_t10.innerText)== 0 || _t10.innerText=="")
  {
    this.smallSize = (0+1).toString();
  }  
    else
  {
    this.smallSize = (parseFloat(_t10.innerText)+1).toString();
  }
  this.lblSmallSize.innerText = this.smallSize;
  this.CalculateSmallSizeAmount();
}
   eLargePlus(_t31: HTMLLabelElement) {
    if (parseFloat(_t31.innerText)== 0 || _t31.innerText=="")
      this.elargeSize = (0+1).toString();
    else
    this.elargeSize = (parseFloat(_t31.innerText)+1).toString();
  
    this.lbleLargeSize.innerText = this.elargeSize;
    this.totaleLargeValue = (parseFloat(this.elargePrice) * parseFloat(this.elargeSize)).toString();

    this.CalculateeLargeSizeAmount();
  }
    eLargeMinus(_t31: HTMLLabelElement) {
      if (parseFloat(_t31.innerText)== 0 || _t31.innerText=="")
      {
        this.elargeSize = (0).toString();
        this.isChkonionselarge = false;
        this.isChktomatoeselarge = false;
        this.isChkbellpepperelarge =false;
        this.isChkmushroomelarge=false;
        this.isChkpineappleelarge =false;
        this.isChksausageelarge=false;
        this.isChkpeperonielarge=false;
        this.isChkbarbequechickenelarge=false; 
      } else
      this.elargeSize = (parseFloat(_t31.innerText)-1).toString();
    
      this.lbleLargeSize.innerText = this.elargeSize;
      this.totaleLargeValue = (parseFloat(this.elargePrice) * parseFloat(this.elargeSize)).toString();     
    
      this.CalculateeLargeSizeAmount();
    }
    LargePlus(_t24: HTMLLabelElement) {
      if (parseFloat(_t24.innerText)== 0 || _t24.innerText=="")
      {
        this.largeSize = (0+1).toString();
      }
        else
      this.largeSize = (parseFloat(_t24.innerText)+1).toString();
    
      this.lblLargeSize.innerText = this.largeSize;
      this.CalculateLargeSizeAmount();
    }
    LargeMinus(_t24: HTMLLabelElement) {
      if (parseFloat(_t24.innerText)<2 || _t24.innerText=="")
      {
        this.ischkOffer3=false;
        this.totalLargeOffer="";
        this.totalLargeValue="";
        this.largeSize = (0).toString();
        this.isChkonionslarge = false;
        this.isChktomatoeslarge = false;
        this.isChkbellpepperlarge =false;
        this.isChkmushroomlarge=false;
        this.isChkpineapplelarge =false;
        this.isChksausagelarge=false;
        this.isChkpeperonilarge=false;
        this.isChkbarbequechickenlarge=false;
      }
        else
        {          
      this.largeSize = (parseFloat(_t24.innerText)-1).toString();
        }
      this.lblLargeSize.innerText = parseFloat(this.largeSize).toFixed(2);
    
      this.CalculateLargeSizeAmount();
    }
    onChktomatoessmall(){
      this.CalculateSmallSizeAmount();
    }    
    onChkonionssmall(){
      this.CalculateSmallSizeAmount();
  }
  }
 



