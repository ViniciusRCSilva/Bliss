export interface DiaryProps {
    text: string
    createdAt: string
}

export class Diary {
    private _props: DiaryProps

    constructor(props: DiaryProps) { this._props = props }

    get text() { return this._props.text }
    get createdAt() { return this._props.createdAt }
}