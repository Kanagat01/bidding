import { TStages } from "~/entities/OrderStage";

export type AddOrderStageRequest = { order_id: number } & TStages;
export type EditOrderStageRequest = { order_stage_id: number } & TStages;