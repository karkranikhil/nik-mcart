import {Pipe, PipeTransform} from '@angular/core';
@Pipe({ 
    name: 'mobileFilter'
}) 
export class MobileFilterPipe implements PipeTransform {
    
      transform(items: any[], args: any[]): any {
          if(items && args){
               return items.filter(item => (item.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1)|| item.manufacturer.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
          }
          else{
              return items
          }
       
  
    } 
}