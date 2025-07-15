<template>
	<header class="bg-white shadow-lg sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-3">
					<NuxtLink
						to="/"
						class="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors"
					>
						<img src="/favicon.ico" alt="Logo" class="w-8 h-8" />
						<span class="text-xl font-semibold">My App</span>
					</NuxtLink>
				</div>

				<nav class="hidden md:flex space-x-8">
					<NuxtLink
						to="/"
						class="text-gray-600 hover:text-blue-600 font-medium transition-colors router-link-active:text-blue-600"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/about"
						class="text-gray-600 hover:text-blue-600 font-medium transition-colors router-link-active:text-blue-600"
					>
						About
					</NuxtLink>
				</nav>

				<div class="flex items-center space-x-4">
					<button
						class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
					>
						Login
					</button>
					<!-- Mobile menu button -->
					<button
						class="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
