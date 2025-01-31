<script lang="ts">
	import { createFormField, type Form, type FormFieldName } from "@/lib/internal/index.js";
	import type { AnyZodObject } from "zod";

	type T = $$Generic<AnyZodObject>;
	type Path = $$Generic<FormFieldName<T>>;

	export let config: Form<T>;
	export let name: Path;

	const {
		superFormStores,
		getFieldAttrs,
		actions,
		attrStore,
		hasValidation,
		hasDescription,
		handlers,
		setValue,
		ids
	} = createFormField<T, Path>(config, name);

	const { value, errors, constraints } = superFormStores;

	$: inputAttrs = getFieldAttrs({
		val: $value,
		errors: $errors,
		constraints: $constraints,
		hasValidation: $hasValidation,
		hasDescription: $hasDescription
	});
	$: attrStore.set(inputAttrs);

	$: attrs = {
		input: inputAttrs,
		label: {
			for: ids.input
		},
		description: {
			id: ids.description
		},
		validation: {
			id: ids.validation,
			"aria-live": "assertive"
		} as const
	};
</script>

<slot
	stores={superFormStores}
	errors={$errors}
	value={$value}
	constraints={$constraints}
	{handlers}
	{attrs}
	{actions}
	{setValue}
/>
