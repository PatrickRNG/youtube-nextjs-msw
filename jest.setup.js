import '@testing-library/jest-dom/extend-expect'

import { server } from './lib/mocks/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())
