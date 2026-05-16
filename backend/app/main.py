from fastapi import FastAPI
from app.database import engine, Base
from app.models import Sede, Rol, Usuario, Categoria, Producto, MovimientoInventario, DetalleMovimiento, StockActual

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Sistema ISP funcionando"}