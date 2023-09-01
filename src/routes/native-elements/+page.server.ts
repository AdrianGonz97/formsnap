import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { simpleFormSchema } from "../schemas.js";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(simpleFormSchema)
	};
};