


export type GoalTextProps = {
    onGoalAdd: (text: string) => void
}


// goal list
export type GoalItemProps = {
    text: string,
    key: string
}

export type GoalProps = {
    item: GoalItemProps,
    onPress: (key: string) => void
}





