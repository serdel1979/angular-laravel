import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: any[] = [];
  nuevo = { nombre: '', precio: 0 };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getAll().subscribe((res: any) => {
      this.productos = res;
    });
  }

  crearProducto() {
    this.productoService.create(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', precio: 0 };
      this.cargarProductos();
    });
  }

  eliminarProducto(id: number) {
    this.productoService.delete(id).subscribe(() => {
      this.cargarProductos();
    });
  }
}
