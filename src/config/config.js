import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'prod') {
    config({ path: path.resolve(__dirname, '../../prod.env') });
} else if (process.env.NODE_ENV === 'staging') {
    config({ path: path.resolve(__dirname, '../../staging.env') });
} else {
    config({ path: path.resolve(__dirname, '../../dev.env') });
}

export const PORT = process.env.PORT;
console.log(PORT)