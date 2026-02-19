

interface Base {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    completeBy: Date;
    daysRemaining: number;
    progress: number;
    status: GoalStatus;
    subgoals?: Object | undefined;
}

export enum GoalStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}

export type GoalMainPageProps = Omit<Omit<Omit<Base, "description">, "daysRemaining">, "subgoals">
