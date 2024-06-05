import { Card } from "./Card"
import { Column } from "./Column"
import { Term } from "./Term"
import { User } from "./User"

export interface Response {
    terms: Term[],
    columns: Column[],
    cards: Card[],
    users: User[],
}


