export const Metal = {
    Gold: 'Gold',
    Silver: 'Silver',
} as const

export type Metal = (typeof Metal)[keyof typeof Metal]

export const MetalColor: Record<Metal, string> = {
    [Metal.Gold]: 'bg-yellow-500',
    [Metal.Silver]: 'bg-gray-300',
}
