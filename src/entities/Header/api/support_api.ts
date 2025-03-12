import {api} from "../../../shared/api/rtkApi";
export interface dataSendSupport {
    email: string
    message: {
        name: string
        phone: string
        text: string
    }
}

const supportApi = api.injectEndpoints({
    endpoints: (build) => ({
        sendSupportMessage: build.mutation<{sucess?: boolean}, dataSendSupport>({
            query: (body) => ({
                url: "email/support",
                method: "POST",
                body,
            }),
        }),
    })
})


export const { useSendSupportMessageMutation } = supportApi;
