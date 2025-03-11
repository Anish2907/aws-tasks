exports.handler = async (event, context) => {
    console.log('Processing SQS event');
    
    // Process each record in the SQS event
    if (event.Records && Array.isArray(event.Records)) {
      for (const record of event.Records) {
        try {
          // Extract the message body
          const messageBody = record.body || '';
          
          // Log the raw message body
          console.log(`SQS Message Raw Body: ${messageBody}`);
          
          // Try to parse JSON if the message is in JSON format
          try {
            const jsonBody = JSON.parse(messageBody);
            console.log(`SQS Message JSON Body: ${JSON.stringify(jsonBody, null, 2)}`);
          } catch (error) {
            console.log('SQS Message is not in JSON format');
          }
          
          // Log additional metadata from the record
          console.log(`SQS Message ID: ${record.messageId || 'N/A'}`);
          console.log(`SQS Message Attributes: ${JSON.stringify(record.messageAttributes || {})}`);
          
        } catch (error) {
          console.error(`Error processing SQS record: ${error.message}`);
        }
      }
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify('Successfully processed SQS messages')
    };
  };
