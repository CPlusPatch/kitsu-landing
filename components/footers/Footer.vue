<script setup lang="ts">
const navigation = [
	{ name: "Privacy", href: "https://kitsunes.chat/_matrix/consent" },
];
</script>

<template>
	<footer class="bg-dark-400 z-1" aria-labelledby="footer-heading">
		<div
			class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
			<nav
				class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
				aria-label="Footer">
				<div v-for="item in navigation" :key="item.name" class="pb-6">
					<a
						:href="item.href"
						class="text-sm leading-6 text-gray-300 hover:text-gray-50"
						>{{ item.name }}</a
					>
				</div>
			</nav>
			<p class="mt-10 text-center text-xs leading-5 text-gray-400">
				&copy; {{ new Date().getFullYear() }} Kitsu. Licensed under
				AGPLv3
			</p>
		</div>
		<a
			href="https://cpluspatch.com"
			target="_blank"
			rel="noopener noreferrer"
			class="px-4 py-4 text-gray-100 text-sm block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
			<div class="mx-auto max-w-7xl text-center w-full">
				A site by <strong class="font-semibold">CPlusPatch</strong>
			</div>
		</a>
	</footer>
</template>
