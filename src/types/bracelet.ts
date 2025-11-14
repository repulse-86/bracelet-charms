import type { Charm } from './charm'
import type { Metal } from './metal'

export type Bracelet = {
    charms?: Charm[]
    metal: Metal
}
