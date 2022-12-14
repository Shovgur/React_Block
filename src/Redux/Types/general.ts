export type GeneralPayloadWithCallback <T> = {
    data: T;
    callback: () => void
}