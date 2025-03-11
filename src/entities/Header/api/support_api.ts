import {api} from "../../../shared/api/rtkApi";
import {dataModal} from "../../../shared/ui/Modal/Modal";

const supportApi = api.injectEndpoints({
    endpoints: (build) => ({
        sendSupportMessage: build.mutation<{sucess?: boolean}, dataModal>({
            query: (body) => ({
                url: "support",
                method: "POST",
                body,
            }),
        }),
    })
})


export const { useSendSupportMessageMutation } = supportApi;
