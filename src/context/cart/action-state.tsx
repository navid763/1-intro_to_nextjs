import { createContext, Dispatch } from "react";
import { produce } from "immer";

export type color = {
    title: string;
    hex: string
} | null

export type Item = {
    id: string;
    color: color;
    productId: number;
    count: number;
}
export type stateType = Item[];


export type ActionType =
    | { type: "add"; payload: { productId: number; color: color; count?: number } }
    | { type: "increment" | "decrement" | "remove"; payload: { id: string } }
    | { type: "SET_CART"; payload: stateType }


export const cartInitState: stateType = [];

export const cartReducer = produce((draft: stateType, action: ActionType) => {

    switch (action.type) {
        case "add": {
            const { productId, color, count = 1 } = action.payload;
            const id = `${productId}-${color?.hex}`;
            const existingItem = draft.find(item => item.id == id);

            if (existingItem) {
                existingItem.count += 1;
            }
            else {
                draft.push({ id, productId, color, count });
            }
            break;
        }

        case "remove": {
            const { id } = action.payload
            // draft = draft.filter(item => item.id !== id) // we can do this in redux tk
            const existingIndex = draft.findIndex(item => item.id == id);
            if (existingIndex != -1) {
                draft.splice(existingIndex, 1);
            }
            break;
        }

        case "increment": {
            const { id } = action.payload
            const item = draft.find(i => i.id == id);
            if (item) {
                item.count += 1;
            }
            break;
        }

        case "decrement": {
            const { id } = action.payload
            const item = draft.find(i => i.id == id);
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                } else {
                    const itemIndex = draft.findIndex(i => i.id == id); // if count is 1 : remove the item from cart
                    draft.splice(itemIndex, 1)
                }
            }
            break;
        }

        case "SET_CART": {
            // Replace the entire draft array with the new payload(from the local storage)
            return action.payload;
            // When you use return, you're telling Immer: "ignore the draft, use this value as the new state instead":

        }

        default:
            break;
    }
})




const CartContext = createContext<{
    state: readonly Item[]; dispatch: Dispatch<ActionType>; isHydrated: boolean
}>(
    { state: cartInitState, dispatch: () => { }, isHydrated: false }
)

export default CartContext;