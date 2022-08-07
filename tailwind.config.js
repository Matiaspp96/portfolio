/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(-100px, 50px) scale(1.2)' },
					'66%': { transform: 'translate(100px, 50px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				blob2: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(-20px, 50px) scale(1.2)' },
					'66%': { transform: 'translate(60px, 50px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				blob3: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(900px, 150px) scale(1.2)' },
					'66%': { transform: 'translate(450px, -240px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				blob4: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translateY(10rem) scale(1.2)' },
					'66%': { transform: 'translateY(-20rem) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				blob5: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'25%': {
						transform: 'translate(12rem, 0px) scale(1.2)',
					},
					'50%': {
						transform: 'translate(0px, 28rem) scale(0.9)',
					},
					'75%': {
						transform: 'translate(12rem, 28rem) scale(0.9)',
					},
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				fadeUp: {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, 100%, 0)',
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)',
					},
				},
				lightSpeed: {
					'0%': {
						opacity: 1,
					},
					'100%': {
						transform: 'translate3d(100%, 0, 0) skewX(30deg)',
						opacity: 0,
					},
				},
				lightSpeedL: {
					'0%': {
						opacity: 1,
					},
					'100%': {
						transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
						opacity: 0,
					},
				},
				flipX: {
					'0%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
						opacity: 0,
					},
					'40%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
					},
					'60%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
						opacity: 1,
					},
					'80%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
					},
					'100%': {
						transform: 'perspective(400px)',
					},
				},
				roll: {
					'0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%': {
						transform: 'scale(1)',
					},
					'50%': { transform: 'scaleY(0)' },
				},
				movement: {
					'0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateX(0rem)' },
					'10%': { transform: 'translateX(2rem)' },
					'30%': { transform: 'translateX(-2rem)' },
					'50%': { transform: 'translateY(1rem)' },
					'70%': { transform: 'translateY(-1rem)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				blob: 'blob 7s infinite',
				blob2: 'blob2 7s infinite',
				blob3: 'blob3 7s infinite',
				blob4: 'blob4 7s infinite',
				blob5: 'blob5 10s infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
	variants: {
		scrollbar: ['rounded'],
	},
};
