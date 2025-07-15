import { ref } from "vue";

export function useCounter(initial: number = 0) {
	const count = ref<number>(initial);
	const increment = () => count.value++;
	const decrement = () => count.value--;
	return { count, increment, decrement };
}
