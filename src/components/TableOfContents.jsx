export function tableOfContents() {
    // Add this anywhere with: <TableOfContents />
  return (
    <>
      <PageLayout>
        <NavigationHeader>
          <SearchBar />
          <Link to="/docs">Docs</Link>
        </NavigationHeader>
        <Sidebar />
        <PageContent>
          <TableOfContents />
          <DocumentationText />
        </PageContent>
      </PageLayout>
    </>
  );
}
