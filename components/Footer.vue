<template>
	<footer class="bg-gray-800 text-white mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-blue-400">My App</h3>
					<p class="text-gray-300 text-sm leading-6">
						Building amazing web experiences with Nuxt.js
					</p>
					<div class="flex space-x-4">
						<a
							href="#"
							class="text-gray-400 hover:text-blue-400 transition-colors text-xl"
							aria-label="Twitter"
						>
							🐦
						</a>
						<a
							href="#"
							class="text-gray-400 hover:text-blue-400 transition-colors text-xl"
							aria-label="GitHub"
						>
							📱
						</a>
						<a
							href="#"
							class="text-gray-400 hover:text-blue-400 transition-colors text-xl"
							aria-label="LinkedIn"
						>
							💼
						</a>
					</div>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold">Quick Links</h4>
					<ul class="space-y-2">
						<li>
							<NuxtLink
								to="/"
								class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
							>
								Home
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/about"
								class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
							>
								About
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold">Legal</h4>
					<ul class="space-y-2">
						<li>
							<NuxtLink
								to="/privacy"
								class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
							>
								Privacy Policy
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/terms"
								class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
							>
								Terms of Service
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/cookies"
								class="text-gray-300 hover:text-blue-400 transition-colors text-sm"
							>
								Cookie Policy
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold">Newsletter</h4>
					<p class="text-gray-300 text-sm">
						Subscribe to get updates
					</p>
					<form class="space-y-2">
						<input
							type="email"
							placeholder="Enter your email"
							class="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							type="submit"
							class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors font-medium"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div class="mt-8 pt-8 border-t border-gray-700">
				<p class="text-center text-gray-400 text-sm">
					&copy; {{ new Date().getFullYear() }} My App. All rights
					reserved.
				</p>
			</div>
		</div>
	</footer>
</template>
