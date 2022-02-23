FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ironprocessing/ironprocessing.csproj", "ironprocessing/"]
RUN dotnet restore "ironprocessing/ironprocessing.csproj"
COPY . .
WORKDIR "/src/ironprocessing"
RUN dotnet build "ironprocessing.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ironprocessing.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ironprocessing.dll"]