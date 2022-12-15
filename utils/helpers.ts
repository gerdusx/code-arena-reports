export const generateSearchArray = (input: string) => {
    try {
        let results: string[] = [];

        if (input) {
            const parts = input.split(" ");
            if (parts) {
                parts.forEach((part) => {
                    // eslint-disable-next-line no-var
                    let current = "";
                    for (let i = 0; i < part.length; i++) {
                        current = current + part.charAt(i).toLowerCase();
                        results.push(current);
                    }
                });
            }
        }

        return results;
    } catch (error) {
        throw error;
    }
};
