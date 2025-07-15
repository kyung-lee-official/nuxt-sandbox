<template>
	<div class="min-h-screen">
		<!-- Hero Section -->
		<section
			class="bg-gradient-to-br from-blue-600 to-purple-700 text-white"
		>
			<div
				class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
			>
				<h1 class="text-4xl md:text-6xl font-bold mb-6">
					Welcome to My Nuxt App
				</h1>
				<p
					class="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
				>
					This is the home page content that appears between Header
					and Footer
				</p>
			</div>
		</section>

		<!-- Features Grid -->
		<section class="py-16 bg-gray-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold text-center mb-10 text-gray-900">
					Features (Continuously Updated)
				</h2>
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">🔒</div>
						<h3 class="text-xl font-semibold mb-2">
							Authentication
						</h3>
						<p class="text-gray-600 mb-4 text-center">
							Secure login and registration for users.
						</p>
						<NuxtLink
							to="/auth"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Auth</NuxtLink
						>
					</div>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">📝</div>
						<h3 class="text-xl font-semibold mb-2">Blog</h3>
						<p class="text-gray-600 mb-4 text-center">
							Read and write articles about web development.
						</p>
						<NuxtLink
							to="/blog"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Blog</NuxtLink
						>
					</div>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">📊</div>
						<h3 class="text-xl font-semibold mb-2">Analytics</h3>
						<p class="text-gray-600 mb-4 text-center">
							Track usage and performance metrics.
						</p>
						<NuxtLink
							to="/analytics"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Analytics</NuxtLink
						>
					</div>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">⚙️</div>
						<h3 class="text-xl font-semibold mb-2">Settings</h3>
						<p class="text-gray-600 mb-4 text-center">
							Customize your experience and preferences.
						</p>
						<NuxtLink
							to="/settings"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Settings</NuxtLink
						>
					</div>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">💬</div>
						<h3 class="text-xl font-semibold mb-2">Chat</h3>
						<p class="text-gray-600 mb-4 text-center">
							Real-time messaging and support.
						</p>
						<NuxtLink
							to="/chat"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Chat</NuxtLink
						>
					</div>
					<div
						class="bg-white rounded-xl shadow p-8 flex flex-col items-center"
					>
						<div class="text-4xl mb-4">🛒</div>
						<h3 class="text-xl font-semibold mb-2">Shop</h3>
						<p class="text-gray-600 mb-4 text-center">
							Browse and purchase products online.
						</p>
						<NuxtLink
							to="/shop"
							class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
							>Go to Shop</NuxtLink
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
