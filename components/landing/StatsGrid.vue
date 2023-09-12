<script setup lang="ts">
const stats = [
	{ id: 1, name: "Connected servers", value: "35,000+" },
	{ id: 2, name: "Total federated users", value: "30M+" },
	{ id: 3, name: "Total local users", value: "500" },
	{ id: 4, name: "Total messages", value: "200,000+" },
];
</script>

<template>
	<div id="stats" class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<div class="text-center">
					<h2
						class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						It's all connected
					</h2>
					<p
						class="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
						Kitsu services are federated with protocols such as
						Matrix, ActivityPub and more, meaning you can connect
						with anybody on any service!
					</p>
				</div>
				<dl
					class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
					<div
						v-for="stat in stats"
						:key="stat.id"
						class="flex flex-col bg-white/5 p-8">
						<dt
							class="text-sm font-semibold leading-6 text-gray-300">
							{{ stat.name }}
						</dt>
						<dd
							class="order-first text-3xl font-semibold tracking-tight text-white">
							{{ stat.value }}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>
