export const createRoomId = (): string => {
    const timestamp = `${Date.now() % 10000}`;
    const random = `${Math.floor(Math.random() * 1000)}`;
    return timestamp + random;
}