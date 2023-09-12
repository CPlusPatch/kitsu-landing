<script setup lang="ts">
const features = [
	{
		name: "Fully encrypted",
		description:
			"KistuChat is fully end-to-end encrypted, meaning nobody, not even Kitsu can spy on your messages!",
		icon: "tabler:lock",
	},
	{
		name: "Federated",
		description:
			"KitsuChat is based on the Matrix protocol, ensuring that you can message anybody on any Matrix server.",
		icon: "tabler:globe",
	},
	{
		name: "Open source",
		description:
			"KitsuChat uses a free and open source backend and frontend, meaning you can audit the code yourself!",
		icon: "tabler:code",
	},
	{
		name: "Multiple clients",
		description:
			"KitsuChat is compatible with many clients, including Element, FluffyChat, and more!",
		icon: "tabler:devices",
	},
	{
		name: "Connect with the API",
		description:
			"KitsuChat has a fully featured API, allowing you to connect to it with your own bots and applications.",
		icon: "tabler:robot",
	},
	{
		name: "Custom emojis",
		description:
			"KitsuChat lets you add any animated or static emojis you want, even your own custom ones!",
		icon: "tabler:mood-happy",
	},
];
</script>

<template>
	<div id="communication" class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl sm:text-center">
				<h2 class="text-base font-semibold leading-7 text-purple-400">
					KitsuChat
				</h2>
				<p
					class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Encrypted, secure messaging
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					KitsuChat is a secure, encrypted messaging service based on
					the Matrix protocol that lets you message anybody using the
					same protocol, even on different services!
				</p>
			</div>
		</div>
		<div class="relative overflow-hidden pt-16">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<nuxt-img
					src="/images/assets/screenshots/screenshot2.png"
					format="webp"
					alt="App screenshot"
					class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
					width="1920"
					height="1080"
					sizes="sm:100vw md:100vw lg:100vw xl:100vw" />
				<div class="relative" aria-hidden="true">
					<div
						class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-dark-800 pt-[7%]" />
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
				<div
					v-for="feature in features"
					:key="feature.name"
					class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<Icon
							:name="feature.icon"
							class="absolute left-1 top-1 h-5 w-5 text-purple-500"
							aria-hidden="true" />
						{{ feature.name }}
					</dt>
					{{ " " }}
					<dd class="inline">{{ feature.description }}</dd>
				</div>
			</dl>
		</div>
	</div>
</template>
