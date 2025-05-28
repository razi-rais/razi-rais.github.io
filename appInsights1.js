window.appInsights = window.appInsights || new Microsoft.ApplicationInsights.ApplicationInsights({
  config: {
 connectionString: "InstrumentationKey=f7ae3aa9-4646-4666-b74c-08ddd0006825;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/;ApplicationId=be550c16-7432-4381-83c2-117403df889f"
  }
});
window.appInsights.loadAppInsights();
window.appInsights.trackPageView();
