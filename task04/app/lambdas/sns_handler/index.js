exports.handler = async (event, context) => {
    console.log('Processing SNS event');
    
    // Process each record in the SNS event
    if (event.Records && Array.isArray(event.Records)) {
      for (const record of event.Records) {
        try {
          // Check if this is an SNS record
          if (record.EventSource === 'aws:sns' || record.Sns) {
            // Extract the SNS message
            const sns = record.Sns || {};
            const message = sns.Message || '';
            
            // Log the raw message
            console.log(`SNS Message Raw: ${message}`);
            
            // Try to parse JSON if the message is in JSON format
            try {
              const jsonMessage = JSON.parse(message);
              console.log(`SNS Message JSON: ${JSON.stringify(jsonMessage, null, 2)}`);
            } catch (error) {
              console.log('SNS Message is not in JSON format');
            }
            
            // Log additional metadata
            console.log(`SNS Topic ARN: ${sns.TopicArn || 'N/A'}`);
            console.log(`SNS Message ID: ${sns.MessageId || 'N/A'}`);
            console.log(`SNS Subject: ${sns.Subject || 'N/A'}`);
            console.log(`SNS Message Attributes: ${JSON.stringify(sns.MessageAttributes || {})}`);
          }
          
        } catch (error) {
          console.error(`Error processing SNS record: ${error.message}`);
        }
      }
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify('Successfully processed SNS messages')
    };
  };