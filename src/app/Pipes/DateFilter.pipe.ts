import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'DateFilter'})

@Injectable()
export class DateFilterPipe implements PipeTransform{
    transform(items: any[], field: string, value: Date): any {
        if (!items) return [];
        return items.filter(it => it[field] == value.toDateString());
      }
}