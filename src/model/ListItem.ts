export interface Item { 
    id: string;
    item: string;
    checked: boolean;
    priority?: string;
    responsible?: string;
}

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
        private _responsible: string = '',
        private _priority: string = 'Low'
    ) {}

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

    get item(): string {
        return this._item;
    }
    set item(value: string) {
        this._item = value;
    }

    get checked(): boolean {
        return this._checked;
    }
    set checked(value: boolean) {
        this._checked = value;
    }

    get responsible() {
        return this._responsible;
    }

    set responsible(responsible: string) {
        this._responsible = responsible;
    }

    get priority() {
        return this._priority;
    }

    set priority(priority: string) {
        this._priority = priority;
    }

}