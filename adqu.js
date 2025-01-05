function setThresholdValues(min, max) {
    if (min > 0 || max < 0) {
        throw new Error('Threshold values must include zero.');
    }

    // Continue with your logic
    console.log(`Threshold values set from ${min} to ${max}`);
}

try {
    setThresholdValues(-10, 10); // Valid
    setThresholdValues(1, 5);    // Invalid, will throw an error
} catch (error) {
    console.error(error.message);
}
