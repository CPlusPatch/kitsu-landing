<script setup lang="ts">
useHead({
	title: "Your place to hang out",
});

const currentTextIndex = ref(1);

const texts = [
	"a home",
	"a family",
	"a community",
	"a place to hang out",
	"a place to chat",
];

const rotateText = () => {
	currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
};

const interval = setInterval(rotateText, 2500);

onUnmounted(() => {
	clearInterval(interval);
});

const scrollTo = (e: Event) => {
	e.preventDefault();
	const target = document.querySelector(
		(e.target as any).getAttribute("href")
	);
	target.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
	<HeadersNavbar />

	<div
		id="landing"
		class="relative flex flex-col-reverse overflow-hidden px-4 py-16 mx-auto lg:flex lg:flex-col justify-center md:px-8 sm:max-w-xl md:max-w-full min-h-screen">
		<div
			class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:right-0 lg:items-center">
			<nuxt-img
				src="/images/assets/screenshots/screenshot12.png"
				format="webp"
				class="object-cover object-left w-full h-auto lg:w-auto lg:h-full"
				alt="" />
		</div>
		<div
			class="relative flex justify-end max-w-xl w-full mr-1/2 xl:px-20 lg:max-w-1/2">
			<div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
				<div class="max-w-xl mb-6">
					<h2
						class="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
						Kitsu provides you with<br />
						<span class="overflow-hidden h-[1.2em] block">
							<Transition
								enter-from-class="translate-y-10"
								enter-to-class="translate-y-0"
								enter-active-class="duration-300"
								leave-active-class="duration-300"
								leave-from-class="translate-y-0"
								leave-to-class="-translate-y-10"
								mode="out-in">
								<span
									:key="currentTextIndex"
									class="block text-purple-500 mt-1">
									{{ texts[currentTextIndex] }}</span
								>
							</Transition>
						</span>
					</h2>
					<p class="text-base text-gray-200 md:text-lg">
						Kitsu is a community of people who love to chat, hang
						out, and have fun. We have a variety of services to
						offer, and we're always looking for new members to join
						us!
					</p>
				</div>
				<form>
					<div class="flex items-center mt-4 gap-4">
						<ButtonsServiceButton />
						<a
							href="#communication"
							aria-label=""
							class="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-300"
							@click="scrollTo"
							>Learn more</a
						>
					</div>
				</form>
			</div>
		</div>
	</div>

	<LandingLargeScreenshotWithPoints />

	<LandingStatsGrid />

	<LandingSplitImageKitsuClub />

	<LandingCTA />

	<FootersFooter />
</template>
