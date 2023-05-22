
import logo from '../nice-logo.png';

const navigation = {
    solutions: [
    ],
    support: [
    ],
    company: [
    ],
    legal: [
    ],
    social: [
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-4 pt-4 sm:pt-12 lg:px-8 lg:pt-16">
                <div className="border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                    </div>
                    <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                        &copy; 2023 Sesame Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
