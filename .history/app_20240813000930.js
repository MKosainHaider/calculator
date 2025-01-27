<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Calculator</title>
    <script defer src="app.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs w-full">
        <!-- Page Title -->
        <h1 class="text-2xl font-bold text-center mb-4">Responsive Calculator</h1>

        <div class="mb-4 text-right">
            <input type="text" id="display"
                class="w-full p-3 md:p-4 text-xl md:text-2xl border border-gray-300 rounded-lg" readonly>
        </div>

        <!-- Row 1 -->
        <div class="grid grid-cols-4 gap-2 md:gap-4 mb-2">
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">7</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">8</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">9</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400 operator">/</button>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-4 gap-2 md:gap-4 mb-2">
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">4</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">5</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">6</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400 operator">*</button>
        </div>

        <!-- Row 3 -->
        <div class="grid grid-cols-4 gap-2 md:gap-4 mb-2">
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">1</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">2</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">3</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400 operator">-</button>
        </div>

        <!-- Row 4 -->
        <div class="grid grid-cols-4 gap-2 md:gap-4 mb-2">
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">0</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400">.</button>
            <button id="clear" class="p-3 md:p-4 bg-red-500 border border-red-600 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700">C</button>
            <button class="p-3 md:p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-gray-400 operator">+</button>
        </div>

        <!-- Row 5 -->
        <div class="grid grid-cols-4 gap-2 md:gap-4">
            <button id="equals" class="p-3 md:p-4 bg-blue-500 border border-blue-600 text-white rounded-md col-span-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-700">=</button>
        </div>
    </div>
</body>

</html>
