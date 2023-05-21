export interface EmotionProps {
    emotion: string
    date: string
}

export class Emotion {
    private _props: EmotionProps

    constructor(props: EmotionProps) { this._props = props }

    get emotion() { return this._props.emotion }
    get date() { return this._props.date }
}