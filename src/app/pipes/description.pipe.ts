import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'description'
})

export class DescriptionPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        const des = value.slice(0, 45);
        return des
    }
}