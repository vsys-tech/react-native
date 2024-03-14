


export type GoalTextProps = {
    onGoalAdd: (text: string) => void
}


export type GoalItemProps = {
    text: string,
    key: string
}

export type GoalProps = {
    element: GoalItemProps,
    onPress: (key: string) => void
}





