import { createContext } from "react";;
import { StateInterface } from "../models/product";

export const pContext = createContext<StateInterface | null>(null)